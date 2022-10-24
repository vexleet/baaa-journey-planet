import { Carousel } from 'react-responsive-carousel';

const PingDetails = () => {
  return (
    <div>
      <Carousel showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
        <div>
          <img src="https://images.unsplash.com/photo-1666126452579-f032d653c7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1665933351334-001a90d24fa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1666107677986-c264fc8f908e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
      </Carousel>

      <div style={{ paddingLeft: 20, paddingRight: 20, marginTop: 10 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <img src="src/assets/images/default-user.svg" width={50} height={50} />
            <div>
              <p style={{ fontSize: 16, marginBottom: 4 }}>Username</p>
              <p style={{ fontSize: 13 }}>100 followers</p>
            </div>
          </div>
          <button>Follow</button>
        </div>

        <h2 style={{ fontSize: 20, marginTop: 25, marginBottom: 10 }}>
          Eifell Tower, France, Paris
        </h2>
        <p style={{ fontSize: 14 }}>A really nice landmark that is a core must see in France</p>
      </div>
    </div>
  );
};

export default PingDetails;
