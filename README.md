# Agustín Arnaiz React Portfolio

visit: arnaizagustin.vercel.app or arnaiz.com.ar

To run locally:
download repository
create .env file with your 3 keys for emailjs: VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY
run: > npm run dev

packages:
@mailjs/browser (contact email)
react-google-recaptcha
sonner (toast)
tech-stack-icons


Para usar emailjs, crear cuenta, crear template, registrarse en google reCaptha, registrar dominio (localhost), usar V2. import ReCaptcha y setear: sitekey="YOUR_WEB_KEY". En settings del template, reCaptcha_secret_key="YOUR_SECRET_KEY"