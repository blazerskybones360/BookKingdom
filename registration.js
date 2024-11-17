 const nameInput = document.querySelector('.nameInput')
 const phonenumberInput = document.querySelector('.phonenumberInput')
 const surnamrInput = document.querySelector('.surnamrInput')
 const EmailInput = document.querySelector('.EmailInput')
 const pressResult = document.querySelector('.pressResult')

function signIn(username,userphonenumber,usersurname,useremail) {
    const regemail = btoa(useremail)
    const func = {
        username,
        userphonenumber,
        usersurname,
        useremail : regemail
    }
    localStorage.setItem('userInfo',JSON.stringify(func))
    alert('succesfull')
}

pressResult.addEventListener('click', (e) => {
  e.preventDefault()
  const username = nameInput.value
  const useremail = EmailInput.value
  const userphonenumber = phonenumberInput.value
  const usersurname = surnamrInput.value

  signIn(username,userphonenumber,usersurname,useremail)
})

