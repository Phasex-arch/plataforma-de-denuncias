// Função para alternar entre tipos de entidade
        function toggleTipoEntidade() {
            const tipoEmpresa = document.getElementById('tipo-empresa');
            const tipoOrgao = document.getElementById('tipo-orgao');
            const tipoPessoa = document.getElementById('tipo-pessoa');
            
            const empresaGroup = document.getElementById('empresa-group');
            const cnpjGroup = document.getElementById('cnpj-group');
            const orgaoGroup = document.getElementById('orgao-group');
            const pessoaGroup = document.getElementById('pessoa-group');
            const responsavelInput = document.getElementById('responsavel');

            if (tipoEmpresa.checked) {
                // Mostrar campos de empresa
                empresaGroup.style.display = 'block';
                cnpjGroup.style.display = 'block';
                
                // Ocultar outros campos
                orgaoGroup.style.display = 'none';
                pessoaGroup.style.display = 'block';
                
                // Atualizar placeholder do campo responsável
                responsavelInput.placeholder = 'Ex: Diretor, Gerente, Responsável pela empresa';
                
            } else if (tipoOrgao.checked) {
                // Mostrar campos de órgão público
                orgaoGroup.style.display = 'block';
                
                // Ocultar outros campos
                empresaGroup.style.display = 'none';
                cnpjGroup.style.display = 'none';
                pessoaGroup.style.display = 'block';
                
                // Atualizar placeholder do campo responsável
                responsavelInput.placeholder = 'Ex: Secretário, Diretor, Responsável pelo órgão';
                
            } else if (tipoPessoa.checked) {
                // Mostrar campos de pessoa física
                pessoaGroup.style.display = 'block';
                
                // Ocultar outros campos
                empresaGroup.style.display = 'none';
                cnpjGroup.style.display = 'none';
                orgaoGroup.style.display = 'none';
                
                // Restaurar placeholder original
                responsavelInput.placeholder = 'Ex: Proprietário do terreno, Responsável pela obra';
            }
        }

        // Adicionar event listeners quando o DOM carregar
        document.addEventListener('DOMContentLoaded', function() {
            const tipoEmpresa = document.getElementById('tipo-empresa');
            const tipoOrgao = document.getElementById('tipo-orgao');
            const tipoPessoa = document.getElementById('tipo-pessoa');
            
            // Adicionar event listeners
            if (tipoEmpresa) tipoEmpresa.addEventListener('change', toggleTipoEntidade);
            if (tipoOrgao) tipoOrgao.addEventListener('change', toggleTipoEntidade);
            if (tipoPessoa) tipoPessoa.addEventListener('change', toggleTipoEntidade);
            
            // Executar uma vez ao carregar para garantir o estado correto
            toggleTipoEntidade();
            
            // Mostrar/ocultar campos de contato baseado na escolha de anonimato
            document.getElementById('anonimato').addEventListener('change', function() {
                const dadosContato = document.getElementById('dados-contato');
                dadosContato.style.display = this.checked ? 'none' : 'block';
            });
            
            // Formatação de data
            document.getElementById('data').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 8) value = value.slice(0, 8);
                
                if (value.length > 4) {
                    value = value.replace(/^(\d{2})(\d{2})(\d{0,4})/, '$1/$2/$3');
                } else if (value.length > 2) {
                    value = value.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
                }
                
                e.target.value = value;
            });
            
            // Validação de CNPJ
            document.getElementById('cnpj').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 14) value = value.slice(0, 14);
                
                if (value.length > 12) {
                    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{0,2})/, '$1.$2.$3/$4-$5');
                } else if (value.length > 8) {
                    value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{0,4})/, '$1.$2.$3/$4');
                } else if (value.length > 5) {
                    value = value.replace(/^(\d{2})(\d{3})(\d{0,3})/, '$1.$2.$3');
                } else if (value.length > 2) {
                    value = value.replace(/^(\d{2})(\d{0,3})/, '$1.$2');
                }
                
                e.target.value = value;
                
                // Mostrar erro se contiver caracteres não numéricos
                const errorDiv = document.getElementById('cnpj-error');
                if (/[^0-9.\/-]/.test(e.target.value)) {
                    errorDiv.style.display = 'block';
                } else {
                    errorDiv.style.display = 'none';
                }
            });
            
            // Formatação de telefone
            document.getElementById('telefone').addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                
                if (value.length > 6) {
                    value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
                } else if (value.length > 2) {
                    value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
                } else if (value.length > 0) {
                    value = value.replace(/^(\d{0,2})/, '($1');
                }
                
                e.target.value = value;
            });
            
            // Manipulação do envio do formulário
            document.getElementById('formDenunciaAmbiental').addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simular envio bem-sucedido
                document.getElementById('protocolModal').style.display = 'flex';
            });
            
            // Fechar modal
            document.getElementById('closeModal').addEventListener('click', function() {
                document.getElementById('protocolModal').style.display = 'none';
            });
            
            // Copiar protocolo
            document.getElementById('copyProtocol').addEventListener('click', function() {
                const protocolNumber = document.getElementById('protocolNumber').textContent;
                navigator.clipboard.writeText(protocolNumber).then(function() {
                    alert('Protocolo copiado para a área de transferência!');
                });
            });
            
            // Nova denúncia
            document.getElementById('newComplaint').addEventListener('click', function() {
                document.getElementById('protocolModal').style.display = 'none';
                document.getElementById('formDenunciaAmbiental').reset();
                toggleTipoEntidade();
            });
        });