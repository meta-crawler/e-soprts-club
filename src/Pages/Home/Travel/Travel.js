import React from 'react';
import './Travel.css';
import { Button, Container } from 'react-bootstrap';



const Travel = () => {
    return (
        <div className='Travel img-fluid'>
            <Container>
                <h1>TRAVEL WITH THE TEAM
                    TO AN AWAY GAME</h1>

                <div className="text">
                    <p>
                        Polaroid squid flannel chillwave roof party prism green juice schlitz meditation vexillologist post-ironic hella umami cray.
                    </p>
                </div>

                {/* <Button className='button'>Read More</Button> */}
              
     <button type="button" class="btn btn-primary button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
     Read More
     </button>
     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Blog story</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      Firstly we use navigation bar which is use to change route to go one page to another page
Display next match time and schedule with a card component.
Display information about each sport's history and its players' data. 
We used a card carousel to display our project.
Card display for live matches taking place (need to be updated accordingly)
Video streaming,using React .
A user can view all the products without logging into the website.
If a user wishes to purchase a product he has to first register himself and then he can log in into the website using his unique username and password.
A user can view his previous purchases in order summary, monitor his cart status in my cart, and he can also edit his details in the edit profile.
Ability to take feedback from the site's visitors and store them in the backend database

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
            </Container>
        </div>
    );
};

export default Travel;