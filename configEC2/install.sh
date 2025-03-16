echo "Antes da instalação, insira o nome do diretório"
read -p "Digite o nome do diretório: " DIRETORIO

echo "Atualizando pacotes..."
sudo apt update -y && sudo apt upgrade -y

echo "Instalando pip"
sudo apt install -y python3-pip

echo "Instalando MySQL Server Cliente..."
sudo apt install -y mysql-server

echo "Instalando MySQL Connector e psutil..."
pip3 install mysql-connector-python --break-system-packages
pip3 install psutil --break-system-packages

echo "Instalação concluída"

echo "Criando diretório"
mkdir $DIRETORIO

if [ $? -eq 0 ]; then
    echo "Diretório criado com sucesso."
else
    echo "Erro ao criar o diretório."
    exit 1
fi

# Caminho do arquivo
ARQUIVO="/etc/mysql/mysql.conf.d/mysqld.cnf"

# Faz o replace da linha
sudo sed -i 's/^bind-address\s*=.*$/bind-address = 0.0.0.0/' "$ARQUIVO"

# Reinicia o MySQL para aplicar
sudo systemctl restart mysql

echo "Instalação concluída e e pasta criada"

