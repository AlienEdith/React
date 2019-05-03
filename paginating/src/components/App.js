import React, { Component } from 'react';
import Pagination from "react-paginating";
import axios from 'axios';
import _ from 'lodash';

const limit = 12;
const pageCount = 9;
const total = 100;

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentPage: 1
    };
  }

  async componentDidMount() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    this.setState({
      data: _.chunk(response.data, 12)
    })
  }

  handlePageChange = (page) => {
    this.setState({
      currentPage: page
    });
  };

  render() {
    const { currentPage } = this.state;
    if(this.state.data.length == 0){
      return <div>Loading...</div>
    }
    return (
      <div>
        <ul>
          {this.state.data[currentPage - 1].map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <Pagination
          total={total}
          limit={limit}
          pageCount={pageCount}
          currentPage={currentPage}
        >
          {({
            pages,
            currentPage,
            hasNextPage,
            hasPreviousPage,
            previousPage,
            nextPage,
            totalPages,
            getPageItemProps
          }) => (
            
            <div className="btn-group">
              <button className="btn btn-outline-primary"
                {...getPageItemProps({
                  pageValue: 1,
                  onPageChange: this.handlePageChange
                })}
              >
                first
              </button>

              {hasPreviousPage && (
                <button className="btn btn-outline-primary"
                  {...getPageItemProps({
                    pageValue: previousPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {"<"}
                </button>
              )}

              {pages.map(page => {
                let activePage = null;
                if (currentPage === page) {
                  activePage = { backgroundColor: "#fdce09" };
                }
                return (
                  <button className="btn btn-outline-primary"
                    {...getPageItemProps({
                      pageValue: page,
                      key: page,
                      style: activePage,
                      onPageChange: this.handlePageChange
                    })}
                  >
                    {page}
                  </button>
                );
              })}

              {hasNextPage && (
                <button className="btn btn-outline-primary"
                  {...getPageItemProps({
                    pageValue: nextPage,
                    onPageChange: this.handlePageChange
                  })}
                >
                  {">"}
                </button>
              )}

              <button className="btn btn-outline-primary"
                {...getPageItemProps({
                  pageValue: totalPages,
                  onPageChange: this.handlePageChange
                })}
              >
                last
              </button>
            </div>
            
          )}
          
        </Pagination>
      </div>
    );
  }
}

export default App;
