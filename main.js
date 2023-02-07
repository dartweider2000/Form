
const 
   toggleCheckboxes = document.querySelectorAll('.dialog-block-form__toggle'),
   passwodButtons = document.querySelectorAll('.block-form__password-button'),
   signupLink = document.querySelector('.signin-forms .footer-block__link'),
   signinLink = document.querySelector('.signup-forms .footer-block__link'),
   forms = document.querySelector('.forms');

passwodButtons.forEach(passwrdButton => {
   const form = passwrdButton.closest('.block-form');
   const passwordInputs = form.querySelectorAll('.block-form__filed_password>input');

   passwrdButton.addEventListener('click', e => {
      passwordInputs.forEach(passwordInput => {
         if(passwordInput.type == 'password'){
            passwordInput.type = 'text';
         }else{
            passwordInput.type = 'password';
         }
      });

      e.preventDefault();
   });
});

toggleCheckboxes.forEach(toggleCheckbox => {
   const checkox = toggleCheckbox.querySelector('input');

   toggleCheckbox.addEventListener('click', e => {
      checkox.checked = !checkox.checked;

      toggleCheckbox.classList.toggle('_active');
   })
});

signupLink.addEventListener('click', e => {
   forms.classList.add('_active');
});

signinLink.addEventListener('click', e => {
   forms.classList.remove('_active');
});

document.addEventListener('keydown', ({code}) => {
   if(code == 'Tab'){
      event.preventDefault();
   }
});