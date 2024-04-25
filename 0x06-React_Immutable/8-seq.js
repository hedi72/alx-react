import { Seq, fromJS } from "immutable";

const printBestStudents = (object) => {
  const lazySeq = Seq(fromJS(object))
    .filter((student) => student.get("score") >= 70)
    .map((student) =>
      student
        .update(
          "firstName",
          (firstName) => firstName.charAt(0).toUpperCase() + firstName.slice(1)
        )
        .update(
          "lastName",
          (lastName) => lastName.charAt(0).toUpperCase() + lastName.slice(1)
        )
    );

  console.log(lazySeq.toJS());
};

export default printBestStudents;
