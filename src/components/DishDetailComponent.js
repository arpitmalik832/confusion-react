import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        if(this.props.dish != null) {
            const comments = this.props.dish.comments.map((comment) => {
                return (
                    <div c>
                        <p>{comment.comment}</p>
                        <p>
                            -- {comment.author}, {new Date(comment.date).toDateString()}
                        </p>
                    </div>
                );
            });

            return (
                <div className="row">
                    <div key={this.props.dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg  width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {comments}
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;