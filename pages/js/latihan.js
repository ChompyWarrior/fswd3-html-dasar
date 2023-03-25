// URI: alamat web/ alamat lokasi file
// base url -> alamat web
// endpoint -> alamat lokasi file/ resource/ data

const baseUrl = "https://crudcrud.com/api/";

// api key silahkan diganti sendiri
const apiKey = "14bddc9680c94546ba17d1acfae4abf7";
const url = baseUrl + apiKey;
const endpointList = `${url}/list`;
const endpointDosen = `${url}/dosen`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getlist = () => {
  fetch(endpointList).then(handleSuccess).catch(handleError);
};

// GET detail data
const detaillist = (id) => {
  fetch(`${endpointList}/${id}`).then(handleSuccess).catch(handleError);
};

// POST data/ menambah data
const postlist = (list) => {
  fetch(endpointList, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// DELETE data
const deletelist = (id) => {
  fetch(`${endpointList}/${id}`, {
    method: "DELETE",
  })
    .then(handleSuccess)
    .catch(handleError);
};

// PUT data/ update data
const updatelist = (id, list) => {
  fetch(`${endpointList}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  })
    .then(handleSuccess)
    .catch(handleError);
};

// async
getlist();
deletelist("6418143b22534003e8c8ea63");
getlist();

// const list = {
//   nim: "1234567890",
//   nama: "Ari",
//   alamat: "Jl. Jalan",
// };

const list2 = {
  nim: "23424234",
  nama: "Putra",
  alamat: "Jl. Bareng",
};

// postlist(list);
// postlist(list2);

// const listEdit = {
//   nim: "252525",
//   nama: "Rizqi",
//   alamat: "Jl. Kenangan",
// };
// updatelist("6418143b22534003e8c8ea62", listEdit);
detaillist("6418143b22534003e8c8ea62");
