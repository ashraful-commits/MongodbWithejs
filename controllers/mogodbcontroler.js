const user = require('../models/user');
// const all_student = document.getElementById('all_student');
//======================================> mongo model test

const mongoTest = async () => {
  // user.create({
  //   name: 'ashraful',
  //   age: 30,
  //   skill: 'mern',
  //   email: 'ashrafulalam1@gmail.com',
  //   gender: 'Female',
  // });
  //   const all_data = await user.find();
  //   console.log(all_data);
  //   let list = [];
  //   all_data.map((items) => {
  //     list += `
  //     <tr class="">
  //     <td class="text-center">${items.id}</td>
  //     <td class="text-center">${items.name}</td>
  //     <td class="text-center">
  //         <img style="width: 50px;height:50px" src="" alt="">
  //     </td>
  //     <td class="text-center">30 Y</td>
  //     <td class="text-center">${items.skill}</td>
  //     <td class="text-center">
  //         <a class="btn btn-sm btn-primary" href=""><i class="fas fa-eye"></i></a>
  //         <a class="btn btn-sm btn-warning" href=""><i class="fas fa-edit"></i></a>
  //         <a class="btn btn-sm btn-danger" href=""><i class="fas fa-trash"></i></a>
  //     </td>
  // </tr>
  //     `;
  //     all_student.innerHTML = list;
  //   });
};

module.exports = mongoTest;
