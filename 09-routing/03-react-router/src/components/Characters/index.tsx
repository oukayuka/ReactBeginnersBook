import { parse } from 'query-string';
import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Redirect } from 'react-router-dom';
import { Button, Divider, Icon } from 'semantic-ui-react';

import { characterData } from 'characterData';
import Spinner from 'components/common/Spinner';
import Helmet from 'react-helmet';
import CharacterList from './CharacterList';
import './index.css';

type CharactersProps = RouteComponentProps<{ code: string }>;

const Characters: React.SFC<CharactersProps> = ({
  history,
  location,
  match,
}) => {
  const codes = Object.keys(characterData);
  const targetCode = match.params.code;
  const isLoading = parse(location.search).loading === 'true';

  return codes.includes(targetCode) ? (
    <>
      <Helmet>
        <title>キャラクター一覧 | はねバド！</title>
      </Helmet>
      <header>
        <h1>はねバド！ キャラクター一覧</h1>
      </header>
      {isLoading ? (
        <Spinner />
      ) : (
        <CharacterList
          school={characterData[targetCode].school}
          characters={characterData[targetCode].players}
        />
      )}
      <Divider hidden={true} />
      <Button basic={true} color="grey" onClick={() => history.push('/')}>
        <Icon name="home" />
        ホームへ
      </Button>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default withRouter(Characters);
