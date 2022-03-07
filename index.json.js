
   export const datas=[
        {
            id:1,
            firstname:'Ramesh babu',
            lastname:'R',
            email:'ramesh@gmail.com'
        },
        {
            id:2,
            firstname:'Aravind',
            lastname:'K',
            email:'aravind@gmail.com'
        },
        {
            id:3,
            firstname:'Saruk',
            lastname:'R',
            email:'saruk@gmail.com'
        }
    ]
    
const data=async() =>{
    const res=await fetch ("../index.svelte",{
        method:"POST",
        body:JSON.stringify(datas),

    });
};