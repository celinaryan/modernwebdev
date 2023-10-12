import Parse from "parse";

// READ operation - get all lessons in Parse class Lesson
export const getAllLessons = () => {
    const Lesson = Parse.Object.extend("Classes");
    const query = new Parse.Query(Lesson);
    return query.find().then((results) => {
      console.log("results: ", results);
      // returns array of Lesson objects
      return results;
    });
  };

// READ operation - get all lessons in Parse class Lesson
export const getAllUsers = () => {
  const User = Parse.Object.extend("User");
  const query = new Parse.Query(User);
  return query.find().then((results) => {
    console.log("results: ", results);
    // returns array of Lesson objects
    return results;
  });
};

export let Lessons = {};
Lessons.collection = [];

export let Users = {};
Users.collection = [];
