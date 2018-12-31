import React from 'react'
import { actions, withRouter } from 'mirrorx'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Search = ({className, searchTerm, history}) =>
  <form
    className={className}
    onSubmit={event => {
      event.preventDefault()
      event.target.querySelector('input').blur()
      history.push(`/search/"${encodeURIComponent(searchTerm)}"`)
    }}
  >
    <input
      ref={this.input}
      placeholder='Search for a great podcast here!'
      value={searchTerm}
      onChange={event => actions.search.updateSearchTerm(event.target.value)}
      aria-label='Podcast Search'
    />
  </form>

Search.defaultProps = {
  className: '',
  searchTerm: ''
}

Search.propTypes = {
  className: PropTypes.string,
  searchTerm: PropTypes.string
}

export const SearchWithRouter = withRouter(Search)

export default styled(SearchWithRouter)`
  input {
    font-size: 1.5rem;
    text-align: center;
    width: 80%;
    background: none;
    border: none;
    color: white;
    border-bottom: solid 2px rgba(255,255,255,0.3);
  }

  input:focus {
    outline: 0;
  }

  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (max-width: 500px) {
    input {
      font-size: 1rem;
    }
  }
`
