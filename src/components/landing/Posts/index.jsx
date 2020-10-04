import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card, Button } from 'components/common';
import { Wrapper, Grid, Item, Content, SeeMoreWrapper } from './styles';

const formatDate = date =>
  new Date(date).toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

export const Posts = () => {
  const {
    hashnode: {
      user: {
        publication: { posts },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        hashnode {
          user(username: "lauthieb") {
            publication {
              posts {
                title
                coverImage
                dateAdded
                slug
              }
            }
          }
        }
      }
    `
  );

  return (
    <Wrapper as={Container} id="posts">
      <h2>Posts</h2>
      <Grid>
        {posts.slice(0, 3).map(({ title, coverImage, dateAdded, slug }) => (
          <Item key={slug} as="a" href={`https://blog.lauthieb.dev/${slug}`} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <img src={coverImage} alt={title} />
                <h4>{title}</h4>
                <p>{formatDate(dateAdded)}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
      <SeeMoreWrapper>
        <h4>Want to see more posts?</h4>
        <Button as="a" href="https://blog.lauthieb.dev" target="_blank">
          Go to blog
        </Button>
      </SeeMoreWrapper>
    </Wrapper>
  );
};
