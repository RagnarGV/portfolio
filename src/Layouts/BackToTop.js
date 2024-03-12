import React, {useState} from 'react'; 

const ScrollButton = () =>{ 

const [visible, setVisible] = useState(false) 

const toggleVisible = () => { 
	const scrolled = document.documentElement.scrollTop; 
	if (scrolled > 300){ 
	setVisible(true) 
	} 
	else if (scrolled <= 300){ 
	setVisible(false) 
	} 
}; 

const scrollToTop = () =>{ 
	window.scrollTo({ 
	top: 0, 
	behavior: 'smooth'
	/* you can also use 'auto' behaviour 
		in place of 'smooth' */
	}); 
}; 

window.addEventListener('scroll', toggleVisible); 

return ( 
    <button onClick={scrollToTop} className='hidden sm:block hover:animate-bounce float-right h-20 w-16 m-auto toTopGray950 rounded-2xl' style={{display: visible ? 'inline' : 'none'}}>
    <i class="las la-angle-double-up text-4xl mb-7 text-gray-500"></i>
    </button>
); 
} 

export default ScrollButton; 
