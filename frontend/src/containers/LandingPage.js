import React from "react"
import { Button, Container, Col, Row } from "reactstrap"
import { connect } from "react-redux"
import { getExamples } from "../redux/example"

@connect(store => ({
    // linking the redux store with this component
    examples: store.example.exampleList,
}))

class LandingPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(getExamples())
    }

    pageHeader(){
        let pageHeader = React.createRef();
        return(
            <Container>
                <div
                    style={{
                        backgroundColor:"black",
                        minHeight: "30vh",
                        maxHeight: "120px",
                        width: "100%",
                        zIndex: "1",
                        display: "flex"
                    }}
                    data-parallax={true}
                    ref={pageHeader}
                >
                    <Row className="mx-auto text-center">
                        <Col sm="10" md="10" lg="9" xl="9">
                            <Row>
                                <Col sm="6" md="6" lg="6" xl="6">
                                    <span style={{color: "white", fontSize:"30px", fontWeight:"500px"}}>Accentron</span>
                                </Col>
                                <Col sm="6" md="6" lg="6" xl="6">
                                    <span style={{color: "white", fontSize:"30px", fontWeight:"500px"}}>Accent Conversion</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

            </Container>
        )
    }

    render() {
        return (
            <>
                {this.pageHeader()}

            </>
        )
    }
}

export default LandingPage
