// var course = new Object();

// course.title = "Javascript Training."
// course.instructor = "Chetan Mahajan."
// course.views = 0;
// course.level = 1;
// course.published = false;


// var course = {
//   title : "Javascript Training.",
//   instructor : "Chetan Mahajan.",
//   views : 0,
//   level : 1,
//   published : false,
//   updateView: function() {
//     return ++ course.views;
//   }
// }
//
// console.log(course);
// course.updateView();
// console.log(course.views);


// creating a course object constructor.
function course (title, instructor, level, published, views) {
  this.published = published;
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.views = views;
  this.updateView = function(){
    return ++this.views;
  };
}

var courses = [ new course("Javascript Essential Training", "Chetan Mahajan", 1, false, 0),
                new course("Java Essential Training", "Chetan Mahajan", 1, true, 222)
];

// var course1 = new course("Javascript Essential Training", "Chetan Mahajan", 1, false, 0);
// var course2 = new course("Java Essential Training", "Chetan Mahajan", 1, true, 222);
//
// console.log(course1);
// console.log(course2);


console.log(courses[1].updateView());
