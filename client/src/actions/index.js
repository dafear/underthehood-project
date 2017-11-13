 import axios from 'axios'



 export const UPDATE_MAP_LOCATION = 'UPDATE_MAP_LOCATION';
 export const upDateMapLocation = (lat, lng) => ({
  type: UPDATE_MAP_LOCATION,
  lat,
  lng

 });

 export const registerUser = (email, password)=> {
   return (dispatch) => {

     return fetch('https://underthehood-project.herokuapp.com/api/auth/register', {
         method: 'POST',
         headers: {
             'content-type': 'application/json'
         },
         body: JSON.stringify({email, password})
      })
       .then(res => res.json())
       .then(json => window.location = '/signin')
       .catch(err => {
           console.log(err);
       });
   }

  }

  export const signinUser = (email, password)=> {
   return (dispatch) => {

     const token = btoa(`${email}:${password}`);
     fetch('https://underthehood-project.herokuapp.com/api/auth/login', {
         method: 'POST',
         headers: {
             // Provide our username and password as login credentials
             Authorization: `Basic ${token}`
         }
     })
     .then(res => res.json())
     .then(data => {
       localStorage.setItem('apiToken', data.authToken);
       window.location='/dashboard';
     })
     .catch(err => {
        console.log(err);
     })
   }
  }

export const RECIEVED_COMMENTS = 'RECIEVED_COMMENTS';
export const recievedComments = (comments) => ({
  type: RECIEVED_COMMENTS,
  comments
});

export const fetchComments = () => {
 return (dispatch) => {

	const instance = axios.create({ headers: { 'Content-Type': 'application/json' } });

	return instance.get('https://underthehood-project.herokuapp.com/api/comment')
	.then(response => {
    console.log(response.data);
	   dispatch(recievedComments(response.data))
  })

	.catch(function (error) {
		console.log(error);
	});
 }
}

export const saveComment = (lat, lng, comment) => {
 return (dispatch) => {

   const token = localStorage.getItem('apiToken');
   fetch('https://underthehood-project.herokuapp.com/api/comment', {
       method: 'POST',
       headers: {
           // Provide our username and password as login credentials
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({lat, lng, comment})
   })
   .then(res => res.json())
   .then(comments => {
     dispatch(recievedComments(comments))
     window.location = '/dashboard'
   })
   .catch(err => {
      console.log(err);
   })
 }
}

export const ON_MAP_MARKER_CLICK = 'ON_MAP_MARKER_CLICK';
export const onMapMarkerClick = (marker, history) => {
  return dispatch => {
    const token = localStorage.getItem('apiToken');
    fetch(`https://underthehood-project.herokuapp.com/api/comment/${marker.lat}/${marker.lng}`, {
        method: 'GET',
        headers: {
            // Provide our username and password as login credentials
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
    })
    .then(res => res.json())
    .then(comments => {
      dispatch(recievedComments(comments))
      history.push('/comments')
    })
    .catch(err => {
       console.log(err);
    })
  }
}
