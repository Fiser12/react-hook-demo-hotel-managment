import * as React from "react";
import {HotelEntityVm} from "pods/hotel-collection";
import {HotelCard} from "pods/hotel-collection/components";
import {withStyles, createStyles, WithStyles} from "@material-ui/core";

const styles = theme => createStyles({
    listLayout: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
});

interface Props extends WithStyles<typeof styles> {
    hotelCollection: HotelEntityVm[];
}

const HotelCollectionComponentInner = (props: Props) => {
    const {hotelCollection, classes} = props;
    return (
        <div className={classes.listLayout}>
            {
                hotelCollection.map((hotel) => <HotelCard key={hotel.id} hotel={hotel}/>)
            }
        </div>
    );
}

export const HotelCollectionComponent = withStyles(styles)(HotelCollectionComponentInner);