function lastModified()
{
    console.log("hello");
    let modiDate=new Date(document.lastModified);
    let showAs=(modiDate.getMonth()+1)+ "/" +modiDate.getDate()+ "/" +modiDate.getFullYear();
    return showAs
}
document.write ("Last updated on ")
document.write (lastModified() );
document.write ("");

//works ^^^

