const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method='POST' action={`places/${data.id}?_method=PUT`}>
                <div className='row'>
                <div className='form-group col-sm-6'>
                <label htmlFor='name'>Place Name</label>
                <input 
                className='form-control'
                id='name'
                value={data.place.name}
                required
                />
                </div>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor='pic'>Place Picture</label>
                    <input
                        className='form-control'
                        id='pic'
                        name='pic'
                        />
                </div>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form