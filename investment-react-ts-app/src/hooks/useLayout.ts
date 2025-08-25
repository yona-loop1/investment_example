import { useState } from "react"

interface LayoutProps {
    usersName: string;
    renderLayout: (name: string) => void;
}

const useLayout = ():LayoutProps => {
    const [word, setword] = useState<string>('');

    let firstName = sessionStorage.getItem('firstName')
    let lastName = sessionStorage.getItem('lastName')
    let space = ' '
    if (firstName === null || lastName === null) {
        firstName = ''
        lastName = ''
        space = ''
    }
    const usersName: string = firstName + space + lastName ;

    function renderLayout(word: string) {
        setword(word)
    }

    return {
        usersName,
        renderLayout
    }
};

export default useLayout;