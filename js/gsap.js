var marcoTl = new TimelineMax({});
var flyRepeat =  TweenMax.from("#home_marco", 2.5,{
    y: "+=60",
    repeat: -1,
    yoyo: true,
    ease: 'M0,0 C0.128,0.572 0.447,0.958 0.702,1.032 0.862,1.078 0.838,1 1,1 ',
    yoyoEase: true,
})

marcoTl.from('#home_marco',1,{
    y: '-=100',
    opacity: '0',

})
.add(flyRepeat,0);

// FoodBook開始

var foodBook = new TimelineMax({repeat:-1});

var group1 = ['#foodbook1', '#foodbook2'];
var g1 = TweenMax.staggerFrom(group1,1,{x:"+=30",opacity:0},0.5)

var group2 = ['#foodbook3', '#foodbook4'];
var g2 = TweenMax.staggerFrom(group2,1,{x:"+=30",opacity:0},0.5)

var group3 = ['#foodbook5', '#foodbook6'];
var g3 = TweenMax.staggerFrom(group3,1,{x:"+=30",opacity:0},0.5)


foodBook.add(g1,0);
foodBook.to("#foodbook1,#foodbook2",1,{
    x:"-=5",
    opacity: 0,
    delay: 3,
})

foodBook.add(g2,5)
foodBook.to("#foodbook3,#foodbook4",1,{
    x:"-=5",
    opacity: 0,
    delay: 3,
})

foodBook.add(g3,10)
foodBook.to("#foodbook5,#foodbook6",1,{
    x:"-=5",
    opacity: 0,
    delay: 3,
})