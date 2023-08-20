import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Dna } from 'react-loader-spinner';
import { fetchPhotos } from "api";
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import css from "./App.module.css"

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    loadMoreBtn: false,
  }

  async componentDidUpdate(prevProps, prevState) {
    
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
     ) {

      this.setState({ loading: true })
      
      try {
        const queryWithoutId = this.state.query.slice(this.state.query.indexOf("/") + 1);

        if (queryWithoutId) {
          const imagesGallery = await fetchPhotos(queryWithoutId, this.state.page)

          this.setState(prevState => {
            return { images: prevState.images.concat(imagesGallery.hits), loading: false, loadMoreBtn: true }
          });

          if (imagesGallery.hits.length === imagesGallery.totalHits) {
            this.setState({ loadMoreBtn: false });
          }
          if (imagesGallery.totalHits === 0) {
            this.setState({ loadMoreBtn: false });
            NotificationManager.info('Sorry, there are no images matching your search query. Please try again.');
          }
        }
        else {
          this.setState({ loading: false, loadMoreBtn: false });
          NotificationManager.warning("You didn't enter anything into the search engine");
        }

      }
      catch (error) {
        console.log(error);
      }
    }
  }

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1
    })
  }

  loadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1 }))
  }

  render() {
    return (
      <div className={css.container}>
        <Searchbar onChangeQuery={this.changeQuery} />
        {this.state.loading && (
          <Dna
            visible={this.state.loading}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{
              marginRight: "auto",
              marginLeft: "auto"
            }}
            wrapperClass="dna-wrapper"
          />
        )}
        {this.state.images && (
          <ImageGallery imagesGallery={this.state.images} />
        ) }
        
        {this.state.loadMoreBtn && (
          <Button onLoadMore={this.loadMore} />
        )}
        {(this.state.images.length !== 0 && !this.state.loadMoreBtn) && (
          <p>We're sorry, but you've reached the end of search results.</p>
        )}
        <NotificationContainer />
      </div>
    )
  }
}
