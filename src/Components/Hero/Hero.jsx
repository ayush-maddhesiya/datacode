export default function Hero() {
    return (
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image bg-no-repeat max-w-full h-full w-full'
          style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1679941208910-cdeae091b777?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmclMjBsYW5ndWFnZSUyMGxvZ298ZW58MHx8MHx8fDA%3D')", height: 600, width: 1200  }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>Heading</h1>
                <h4 className='mb-3'>Subheading</h4>
                <a className='btn btn-outline-light btn-lg' href='#!' role='button'>
                  Call to action
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }