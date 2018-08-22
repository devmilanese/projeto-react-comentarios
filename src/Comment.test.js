import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import Comment from './Comment'

describe('<Comment />', ()=>{
  
  it('renders without crashing', () => {
      const comment ={
          comment: 'test'
      }
      const wrapper = shallow(<Comment comment={comment} />)
      expect(wrapper.lehght).toBe()
      expect(wrapper.is('.well')).toBe(true)
      expect(wrapper.text()).toBe(comment.comment)
    })
  
})