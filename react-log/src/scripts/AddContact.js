export function AddContact () 
{
    const newLastName = prompt("Enter Lastname");
    const newFirstName = prompt("Enter Firstname");
    const newEmail = prompt("Enter Email");
    let newContact = prompt("Enter Contact#");
    newContact = parseInt(newContact);
    let emailDomain = ["@gmail.com","@hotmail.com","@yahoo.com"];

    const containDomain = emailDomain.some(domain => new RegExp(`${domain}$`).test(newEmail));

    if (
        newLastName !== null && newLastName !== '' &&
        newFirstName !== null && newFirstName !== '' &&
        newEmail !== null && newEmail !== '' &&
        Number.isInteger(newContact) && containDomain === true
    ) {
        console.log(newLastName);
        console.log(newFirstName);
        console.log(newEmail);
        console.log(newContact);
    } else {
        alert("Bad test");
    }
}
