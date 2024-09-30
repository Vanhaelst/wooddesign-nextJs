import styled from "styled-components";
import Image from "@/components/Image";
import Grid from "@/components/Grid";

const RowOdd = styled.div`
  margin-bottom: 60px;
  align-items: center;
  img {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    flex-direction: row;
    img {
      margin-bottom: 0;
      min-height: 400px;
    }
  }
`;

const RowEven = styled.div`
  margin-bottom: 60px;
  align-items: center;
  flex-direction: column-reverse;
  img {
    margin-bottom: 24px;
  }
  @media screen and (min-width: ${(props) =>
      props.theme.grid.breakpointSmall}px) {
    flex-direction: row;
    img {
      margin-bottom: 0;
      min-height: 400px;
    }
  }
`;

export const Row = ({ image, isEven, children }) => {
  if (isEven) {
    return (
      <RowEven as={Grid} row>
        <Grid item xs={12} sm={6} lg={{ width: 6 }}>
          <Image src={image} objectFit height="100%" className="rounded-3xl" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={{ width: 6 }}
          flex
          justifyContent="flex-end"
          flexDirection="column"
        >
          {children}
        </Grid>
      </RowEven>
    );
  }

  return (
    <RowOdd as={Grid} row>
      <Grid
        item
        xs={12}
        sm={6}
        lg={6}
        flex
        justifyContent="flex-start"
        flexDirection="column"
      >
        {children}
      </Grid>
      <Grid item xs={12} sm={6} lg={{ width: 6 }}>
        <Image src={image} objectFit height="100%" />
      </Grid>
    </RowOdd>
  );
};
