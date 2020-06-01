import styled from '@emotion/styled';
import * as React from 'react';

const Section = styled.section(() => ({
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}));

export const Container = (props: React.PropsWithChildren<Record<string, unknown>>) => {
  return (
    <Section>
      <main>{props.children}</main>
    </Section>
  );
};
