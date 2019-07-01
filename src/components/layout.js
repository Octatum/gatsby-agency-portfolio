/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Container, Icon } from 'rsuite';
import Header from './header';
import './layout.scss';

const Layout = ({
  children,
  siteTitle,
  siteLogo,
  contact,
  connect,
  headerBreakpoint,
}) => {
  const styles = {
    main: {
      minheight: 'calc(100vh - 185px)',
    },
    footer: {
      width: '100%',
      height: '200px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'black',
      color: 'white',
    },
    linkContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    link: {
      color: '#3FCA00',
      margin: '0 15px',
    },
    span: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contactLine: {
      marginBottom: '10px',
    },
    delimiterBox: {
      maxWidth: 1024,
      width: '100%',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      padding: '0 12px',
      alignItems: 'center',
    },
  };
  return (
    <Container>
      <Header
        siteTitle={siteTitle}
        logo={siteLogo}
        breakpoint={headerBreakpoint}
      />
      <main style={styles.main}>{children}</main>
      <footer style={styles.footer}>
        <div style={styles.delimiterBox}>
          {contact ? (
            <div>
              <h6 style={styles.contactLine}>{contact.address1}</h6>
              <h6 style={styles.contactLine}>{contact.address2}</h6>
              <h6
                style={styles.contactLine}
              >{`${contact.city} ${contact.region}, ${contact.postal_code}`}</h6>
              <h6 style={styles.contactLine}>{`Teléfono: ${
                contact.country_code ? contact.country_code : null
              } ${contact.phone_number}`}</h6>
              <h6 style={styles.contactLine}>{`Email: ${contact.email}`}</h6>
            </div>
          ) : null}
          <span style={styles.span}>
            © {new Date().getFullYear()}, Hecho con{' '}
            <a style={{ color: '#3FCA00' }} href="https://www.gatsbyjs.org">
              &nbsp;Gatsby
            </a>
          </span>
          {connect ? (
            <div style={styles.linkContainer}>
              {connect.map(link => {
                return (
                  <a
                    key={link.node.title}
                    href={`https://${link.node.metadata.url}`}
                    style={styles.link}
                  >
                    <Icon size="3x" icon={link.node.title} />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      </footer>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteTitle: PropTypes.string,
  siteLogo: PropTypes.object,
  contact: PropTypes.object,
  connect: PropTypes.array,
  headerBreakpoint: PropTypes.number,
};

export default Layout;
