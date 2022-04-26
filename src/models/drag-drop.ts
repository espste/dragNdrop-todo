// Drag & Drop Interfaces
export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
    //signal to browser that thing we drag over is a valid target
    dragOverHandler(event: DragEvent): void;
    //react to the drop that happens
    dropHandler(event: DragEvent): void;
    //visual feedback when dragging over a box or if its canceled etc
    dragLeaveHandler(event: DragEvent): void;
}