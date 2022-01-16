const searchInput = document.querySelector ("#search-input");
//Enter and search
searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});



function search() {
    const input = searchInput.value;

    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enUS798US798&sxsrf=AOaemvLf6KNUkmLHYwBflQZmZHKACo4zmg%3A1642349995493&ei=q0XkYe7MHaTBytMP5rOjiAU&ved=0ahUKEwiuzs_A1rb1AhWkoHIEHebZCFEQ4dUDCA4&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBwguELEDEEMyBAguEEMyBQgAEIAEMg4ILhCABBCxAxDHARDRAzIECAAQQzIECC4QQzIHCAAQsQMQQzIECAAQQzINCAAQsQMQgwEQyQMQQzoHCCMQsAMQJzoHCAAQRxCwAzoMCC4QyAMQsAMQQxgAOgQIIxAnOgsILhCABBDHARCjAjoOCC4QsQMQxwEQowIQkQI6CwguEMcBEK8BEJECOgsIABCABBCxAxCDAToICAAQgAQQsQM6CAguELEDEIMBOgoILhDHARDRAxBDOg0ILhCxAxDHARDRAxBDOgsILhCxAxDHARCjAjoICC4QgAQQsQNKBAhBGABKBAhGGABKBQhEGPoGSgUIRBjBG0oECEMYA1CnCFiIFGDfHWgBcAJ4AIABdIgBnQOSAQM0LjGYAQCgAQHIAQzAAQHaAQQIABgI&sclient=gws-wiz"
}

//Google Search Button//
function myCoolFunction () {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C5CHFA_enUS798US798&sxsrf=AOaemvLf6KNUkmLHYwBflQZmZHKACo4zmg%3A1642349995493&ei=q0XkYe7MHaTBytMP5rOjiAU&ved=0ahUKEwiuzs_A1rb1AhWkoHIEHebZCFEQ4dUDCA4&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBwguELEDEEMyBAguEEMyBQgAEIAEMg4ILhCABBCxAxDHARDRAzIECAAQQzIECC4QQzIHCAAQsQMQQzIECAAQQzINCAAQsQMQgwEQyQMQQzoHCCMQsAMQJzoHCAAQRxCwAzoMCC4QyAMQsAMQQxgAOgQIIxAnOgsILhCABBDHARCjAjoOCC4QsQMQxwEQowIQkQI6CwguEMcBEK8BEJECOgsIABCABBCxAxCDAToICAAQgAQQsQM6CAguELEDEIMBOgoILhDHARDRAxBDOg0ILhCxAxDHARDRAxBDOgsILhCxAxDHARCjAjoICC4QgAQQsQNKBAhBGABKBAhGGABKBQhEGPoGSgUIRBjBG0oECEMYA1CnCFiIFGDfHWgBcAJ4AIABdIgBnQOSAQM0LjGYAQCgAQHIAQzAAQHaAQQIABgI&sclient=gws-wiz"
 }

