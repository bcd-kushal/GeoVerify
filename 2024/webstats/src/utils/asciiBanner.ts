'use client'

export const asciiBanner = () => {
    const ascii_banner = "%c\n   __ __            __         __  __ __\n  / //_/__ __ ___  / /  ___ _ / / / //_/__ __ __ _  ___ _ ____\n / ,<  / // /(_-< / _ \\/ _ `// / / ,<  / // //  ' \\/ _ `// __/\n/_/|_| \\_,_//___//_//_/\\_,_//_/ /_/|_| \\_,_//_/_/_/\\_,_//_/\n \n\n %cwelcomes you, fellow programmer. \n"
	const links = "Check me out here:\n\n%c • GitHub: https://github.com/bcd-kushal/\n%c • Portfolio: https://portfolio.kushalkumarsaha.com/\n%c • LinkedIn: https://linkedin.com/in/dev-kushal/\n%c • Email: dev@kushalkumarsaha.com\n\n" 

	console.log(ascii_banner, 'color: #f07373', 'color: #fff')
	console.log(links, 'color: #fff', 'color: #fff', 'color: #fff', 'color: #fff')
}