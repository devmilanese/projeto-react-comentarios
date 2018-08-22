import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Comments from './Comments'

describe('<Comments />', ()=>{
  
  it('renders without crashing', () => {
      const comments = {
          1:{
            comment: 'test 1'
          },
          2:{
            comment: 'test 2'
          }
        }
        const wrapper = shallow(<Comments comments={comments} />)
        expect(wrapper.lehght).toBe()
        expect(wrapper.find('Comment').length).toBe(2)
        
    })
  
})