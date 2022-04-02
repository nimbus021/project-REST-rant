const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                <img src='/images/french-toast.jpg' alt='french toast'></img>
                <div>
                  Photo by <a href='https://unsplash.com/photos/zcUgjyqEwe8'></a>
                </div>
              </div>
              <a href="/places">
              <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Def>
    )
  }

module.exports = home