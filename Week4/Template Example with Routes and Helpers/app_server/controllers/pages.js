const mainPage = (req, res)=>{
    res.render('home', {
        post:[
            {
                author:"Schooly D",
                image:"https://picsum.photos/500/500",
                comments:['comment 1', 'comment 2', 'Eiusmod occaecat nostrud excepteur anim velit reprehenderit officia sunt nostrud incididunt. Ea commodo qui deserunt ea pariatur mollit non quis Lorem sint est qui labore aliquip. Eiusmod excepteur elit veniam quis quis officia.']
            },
            {
                author:"Jordan D",
                image:"https://picsum.photos/500/500?2",
                comments:[]
            },
            {
                author:"Terry B",
                image:"https://picsum.photos/500/500?3",
                comments:['yo this is awesome', 'Proident qui tempor aute Lorem culpa Lorem do labore cillum veniam veniam veniam commodo cupidatat. Et nisi anim veniam eiusmod fugiat labore ad minim. Quis anim esse fugiat ullamco non.', 'this is the best']
            },
        ]
    })
}

const pageTwo = (req, res)=>{
    res.render('index', {
        title:"Page Two",
        name:"Bart Simpson",
        phonenumber:"4014677744",
        address:"1 New England Tech Blvd",
        email:"bsimpson@neit.edu",
        occupation:"Esteemed Professor of Skateboarding"

    })
}

const pageThree = (req, res)=>{
    res.render('index', {title:"Page Three"})
}

module.exports = {
    mainPage,
    pageTwo,
    pageThree
}