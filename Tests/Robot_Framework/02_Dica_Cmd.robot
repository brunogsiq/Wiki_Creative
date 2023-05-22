*** Comments ***

Comandos que poderão ser usado através do cmd ou outro terminal que torna-se interessante saber:
    Ex:
        pwd - encontrar o caminho para o diretório atual
        cd - comando usado para navegar
        cd.. (com dois pontos seguidos) para mover um diretório acima
        cd para ir diretamente para a pasta home
        cd- (com um hífen) para mover para os diretórios anteriores.
        ls - comando utilizado par avisualizar conteúdos em um diretório.
        ls -R vai listar todos os arquivos nos subdiretórios
        ls -a vai mostrar todos os arquivos ocultos
        ls -al vai listar todos os arquivos e diretórios com informações detalhadas como permissões, tamanho, proprietário, etc.
        ls - :: o mesmo sem parâmetros faz a listagem dos arquivos;
        ls -l :: possui a mesma função da anterior, porém, exibe mais mais informações, como os links relacionados aos arquivos ou diretórios, suas permissões, dono ou grupo referente ao arquivo etc.;
        ls *.(extensão do arquivo) :: faz uma listagem de arquivos pela sua extensão (Ex.: ls *.pdf: lista todos os arquivos com extensão ".pdf");
        ls (letra)* :: listagem com todos os arquivos iniciando com a letra especificada (Ex.: ls g*: lista arquivos que começam com a letra "g");
        ls -a :: faz uma listagem de todos os arquivos ocultos presentes no Linux ou diretórios especificados;
        ls -p :: realiza a listagem, mas diferencia diretórios de arquivos, colocando uma "/" na frente dos diretórios;
        ls -R :: listagem de diretórios, arquivos e subdiretórios;
        ls -IX :: realiza a listagem tendo como prioridade a extensão dos arquivos.
        cat - usado para visualizar o conteúdo de um arquivo na saída padrão
            cat > filename cria um novo arquivo
            cat filename1 filename2>filename3 junta dois arquivos (1 e 2) e armazena a saída deles num novo arquivo (3)
                para converter um arquivo para usos de maiúscula ou minúscula, use cat filename | tr a-z A-Z >output.txt
        cp - copia o arquivo
        mv - usado para mover arquivo ou renomear
            ex mover arquivo: mv  file.txt/home/username/Documents
            ex renomear: mv nomeantigo.ext nomenovo.ext
        mkdir - criar um novo diretório
            Para gerar um novo diretório dentro de outro diretório, use este comando básico do Linux mkdir Music/Newfile
            Use a opção p (parents) para criar um diretório entre dois diretórios existentes. Por exemplo, mkdir -p Music/2020/Newfile vai criar o novo arquivo “2020”.
        rmdir - apaga diretório que esteja vazios
        rm - apaga diretório com todos os conteúdos 
        touch - criar arquivos em branco 
        locate - localizar arquivos
        find - localizar arquivos dentro de diretório específico
        grep - localizar dentro de um texto um arquivo em específico
        sudo -  permite executar tarefas como root ou adm
        df - mostra a quantidade de espaço de disco usado no sistema. Para mostrar o resultado em MBs digitar df -m
        du - quanto de espaço um arquivo ou diretório ocupa utilizar junto -h
        head - usado para ver as 10 primeiras linhas de um arquivo de texto
        tail - usado para ver as 10 ultimas linhas de um arquivo de texto
        diff - compara o conteúdo de dois arquivos linha por linha
        tar - arquivar múltiplos arquivos.
        chmod - usado para ler, escrever e executar permissões de arquivos e diretórios
        chown - mudar o transferir a propriedade de um arquivo para um nome de usuário específico
        jobs - mostra todos os trabalhos junto com os seus status de desenvolvimento
        kill - finaliza manualmente um programa
            sigterm(15) - pede que um programa pare de rodar e dá algum tempo para salvar todo o seu progresso
            sigkill(9) - força um programa a parar imediatamente, em que todo o progresso não salvo será perdido
        ps ux - para saber o PID do processo que será finalizado
        ping - verifica status da conexão do servidor
        wget - baixa arquivos da internet junto com o link
        uname - mostra informações detalhadas sobre o sistema
        top - mostra lista de processos que estão em execução e o quanto de CPU cada processo usa
        history - lista o  histórico de comando 
        man - mostra o manual de uso de cada comando ex: man kill
        echo - comando usado para mover alguns dados para um arquivo.
        zip,unzip - comando para compactar arquivos (zip), descompactar arquivos (unzip)
        hostname - nome do host/network
        useradd, userdel - comando para adicionar ou excluir usuário do sistema
        clear - limpa o terminal
