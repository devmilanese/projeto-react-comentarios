import React from 'react'
import App from './App'

import Enzyme, { shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new Adapter()})

describe('<App />', ()=>{
  const base = {
    syncState: jest.fn()
  }
  it('renders without crashing', () => {
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.lehght).toBe()
  })
  it('should have .container class', ()=>{
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.is('.container')).toBe(true)
  })
  it('shows comments', ()=>{
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('.Comments').length).toBe(0)
  })
  it('shows NewComments', ()=>{
    const wrapper = shallow(<App base={base} />)
    expect(wrapper.find('.NewComments').length).toBe(0)
  })
  it('adds a new comment to state when postNewComments is called', ()=>{
    const wrapper = mount(<App base={base} />)
    wrapper.instance().postNewComment({ comment: 'test'})
    wrapper.instance().postNewComment({ comment: 'test'})
    wrapper.instance().postNewComment({ comment: 'test'})
    const comments = Object.keys(wrapper.instance().state.comments)
    expect(comments.length).toBe(3)
  })

  /*it('outputs the <App />',()=>{
    const wrapperShallow = shallow(<App />)
    const wrapperMount = mount(<App />)
    const wrapperRender = render(<App />)

    console.log(wrapperShallow.debug())
    console.log(wrapperMount.debug())
    console.log(wrapperRender.html())

  })*/
})