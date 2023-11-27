import Arrayplayer from './Arrayplayer';
import Player from './Player';

function PlayerList() {
return (


    <div style={{display: 'flex',justifyContent: 'center'}} >

                                         {/* mapping  normal */}
    {/* {Arrayplayer.map((player ,key )=> <Player player={player} key = {key}/>
                )} */}
                                         {/* mapping  spread */}
        {Arrayplayer.map((player ,key )=> <Player {...player} key = {key}/>  )}
    </div>
);
}

export default PlayerList;
