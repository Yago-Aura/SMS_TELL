# SMS_TELL

Este é um aplicativo React Native desenvolvido com **Expo** que permite:

- 📞 Realizar chamadas telefônicas  
- 💬 Enviar mensagens SMS

---

## 🛠 Tecnologias utilizadas

- React Native  
- Expo  
- `react-native-phone-call`  
- `expo-sms`  
- React Navigation

---

## 📱 Funcionalidades

- **Tela de Ligação:** permite ao usuário inserir um número de telefone e fazer uma chamada.  
- **Tela de SMS:** permite inserir um número de telefone e uma mensagem para envio via SMS.

---

## ⚙️ Instalação e execução do projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/Yago-Aura/SMS_TELL.git
cd SMS_TELL

Instale as dependências:

bash
Copiar
Editar
npm install
ou, se usar yarn:

bash
Copiar
Editar
yarn
Execute o app com Expo:

bash
Copiar
Editar
npx expo start
Depois, escaneie o QR Code com o app Expo Go no seu dispositivo físico.

🔒 Permissões necessárias
Este app solicita permissões para:

CALL_PHONE: fazer chamadas telefônicas

SEND_SMS: enviar mensagens SMS

As permissões são tratadas automaticamente pelo Expo ao iniciar o app em um dispositivo Android.

📂 Estrutura do projeto
bash
Copiar
Editar
.
├── App.js               # Configuração da navegação e permissões
├── screens
│   ├── PhoneScreen.js   # Tela de chamadas
│   └── SmsScreen.js     # Tela de envio de SMS
├── assets/              # Recursos estáticos (imagens, ícones, etc.)
├── package.json         # Dependências e scripts do projeto
❗ Observações
O envio de SMS não funciona em emuladores — utilize um dispositivo físico.

As chamadas também exigem permissões que só funcionam corretamente em aparelhos reais.

📧 Contato
Dúvidas ou sugestões: aurayago68@gmail.com
