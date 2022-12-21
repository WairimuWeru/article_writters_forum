const articles =[
    {
        title:"God is faithful 1",
         name:"Brian Murage",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 2",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 3",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 4",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 5",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 6",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 7",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    },
    {
        title:"God is faithful 7",
         name:"mk yoh",
         content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facilis eum mollitia hic? Nostrum similique veniam, impedit iure rem, fugit ipsum harum itaque modi voluptatem non quisquam aut. Distinctio, magni.",
         date:"6TH April 2022"  
    }

]

let outputter = '';


for (let i = 0; i < (articles.length +1); i++) {
        outputter += `
		<div class="article_card">
                <div class="article_nav">
                    <div class="title">${articles[i].title}</div>
                    <Small class="author">${articles[i].name}</Small>
                </div>
                 <div class="content">${articles[i].content}</div>
                 <button class="bttn bg-primary">Read More</button>
                 <div class="date">${articles[i].date}</div>
        </div>`;
        console.log(outputter) ;
        const container = document.querySelector('.article_container');
        container.innerHTML = outputter;       
}

/** 
 * @param {string} selector 
 * @returns {NodeListOf<Element> | Element}
 */
// function to selecting the html elements
function $(selector) {
    const elements = document.querySelectorAll(selector)
    if (elements.length === 1) {
        return elements[0]
    }
    return elements
    submitted(elements)

}

function submitted(elements) {
    $('#blog').addEventListener('submit', async function(e){
        e.preventDefault();
        alert($)

})

$('#blog').addEventListener('submit', async function(e){
    e.preventDefault()
    
    const email = $('#email').value
    const name = $('#name').value
    const proffession= $('#proffession').value
    const img = $('#img').value
    // const quantity = $('#quantity').value
    const content = $('#content').value
    const createdAt = new Date().toISOString();

    $('#submit').textContent = 'Loading...'
    // posting to db
    await addDoc(collection(db, 'blog'), { email, name, proffession, img, content, createdAt })
    $('#submit').textContent = 'Submit'
    alert('blog created successfully')

    // clear the form
    $('#email').value = ''
    $('#name').value = ''
    $('#proffession').value = ''
    $('#img').value = ''
    $('#content').value = ''
})}
