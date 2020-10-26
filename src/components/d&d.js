import React, { Component, createRef } from 'react';

class DragAndDrop extends Component {
    state = {
        dragging: false,
    }
    dropRef = createRef()

    handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({drag:false})
        if(e.dataTransfer.items && e.dataTransfer.files.items > 0) {
            this.props.handleDrop(e.dataTransfer.items)
            this.dropCounter = 0 
        }
    }

    handleDragIn = (e) => {
        e.preventDefault();
        e.stopPropagation()
        this.dragCounter++
        if(e.dataTransfer.items && e.dataTransfer.items.length > 0){
            this.setState({dragging: true})
        }
    }

    handleDragOut = (e) => {
        e.preventDefault();
        e.stopPropagation()
        this.dragCounter--;
        if (this.dragCounter > 0) return 
        this.setState({dragging: false})
    }

    handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation()
    }

    componentDidMount(){
        this.dragCounter = 0;
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount(){
        let div = this.dropRef.current;
        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    render() {
        return(
            <div
             style={{display: 'inline-block', position: 'relative'}}
             ref={this.dropRef}>
                 {this.state.dragging &&
                    <div 
                     style={{
                         border: 'dashed grey 4px',
                         backgroudColor: 'rgba(255, 255, 255, .8',
                         position: 'absolute',
                         top: 0,
                         bottom: 0,
                         left: 0,
                         right: 0,
                         zIndex: 9999
                     }}
                     >
                     <div 
                      style={{
                          position: 'absolute',
                          top: '50%',
                          right: 0,
                          left: 0,
                          textAlign: 'center',
                          color: 'grey',
                          fontSize: 36,

                      }}>
                    <div>drop here :)</div>
                    </div>
                    
                    </div>
                 }
                {this.props.children}
            </div>
        )
    }
}

export default DragAndDrop;