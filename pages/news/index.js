// our-domain.com/news

import Link from 'next/link';

const NewsPage = () => {
  // If you just use <a href='/news/nextjs-is-a-great-framework'>NextJS Is A Great Framework</a>
  // Then when you click the link and then refresh the page, it will come back to news\index.js
  // It means you don't have a single page app here. It means that we're always sending a new request
  // to the backend to fetch a new html page whenever the user navigates around
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href='/news/nextis-is-a-great-framework'>
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
