function computeBoundingBox(imageData) {
    const box = {
        xmin: imageData.width,
        ymin: imageData.height,
        xmax: -1,
        ymax: -1,
    }

    for (let i = 0; i < imageData.width * imageData.height; i += 1) {
        const j = i * 4;

        if (imageData.data[j] > 0 || imageData.data[j + 1] > 0 || imageData.data[j + 2] > 0) {
            const x = i % imageData.width;
            const y = Math.floor(i / imageData.width);
            
            box.xmin = Math.min(x, box.xmin);
            box.ymin = Math.min(y, box.ymin);
            box.xmax = Math.max(x, box.xmax);
            box.ymax = Math.max(y, box.ymax);
        }
    }

    return box;
}

export function processingBounding(imageData) {
    const bounding = computeBoundingBox(imageData);
    const {xmin, xmax, ymin, ymax} = bounding;
    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 280;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.putImageData(imageData, 0, 0);
    ctx.strokeStyle = 'red';
    ctx.strokeRect( xmin, ymin, (xmax - xmin + 1), (ymax - ymin + 1));
    // console.log(canvas.toDataURL())
    return {
        imageUrl: canvas.toDataURL(),
        bounding,
    };
}


export function processingCropped(imageData, bounding) {
    const { xmin, ymin, xmax, ymax } = bounding;
    const croppedCanvas = document.createElement('canvas');
    croppedCanvas.width = 100;
    croppedCanvas.height = 100;
    const croppedCtx = croppedCanvas.getContext('2d');
    croppedCtx.fillRect(0, 0, croppedCanvas.width, croppedCanvas.height)
    const rectWidth = xmax - xmin + 1;
    const rectHeight = ymax - ymin + 1;
    const scalingFactor = 100 / Math.max(rectWidth, rectHeight);
    const croppedRectSize = {
        width: rectWidth * scalingFactor,
        height: rectHeight * scalingFactor,
    };

    const canvas = document.createElement('canvas');
    canvas.width = 280;
    canvas.height = 280;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.putImageData(imageData, 0, 0);

    
    croppedCtx.drawImage(
        canvas, 
        xmin,
        ymin,
        rectWidth,
        rectHeight,
        0,
        0,
        croppedRectSize.width,
        croppedRectSize.height
    );
    return {
        croppedCanvas,
        croppedRectSize
    };
}

export function processingCentered(croppedCanvas, croppedRectSize) {
    const centeredCanvas = document.createElement('canvas');
    centeredCanvas.width = 140;
    centeredCanvas.height = 140;
    const centeredCtx = centeredCanvas.getContext('2d');
    centeredCtx.fillRect(0, 0, centeredCanvas.width, centeredCanvas.height)
    centeredCtx.drawImage(
        croppedCanvas,
        centeredCanvas.width / 2 - croppedRectSize.width / 2,
        centeredCanvas.height / 2 - croppedRectSize.height / 2,
    );

    return centeredCanvas;
}

export function processingNormalized(centeredCanvas) {
    const normalizedCanvas = document.createElement('canvas');
    normalizedCanvas.width = 28;
    normalizedCanvas.height = 28;
    const normalizedCtx = normalizedCanvas.getContext('2d');
    normalizedCtx.fillRect(0, 0, normalizedCanvas.width, normalizedCanvas.height)
    normalizedCtx.drawImage(
        centeredCanvas,
        0,
        0,
        centeredCanvas.width,
        centeredCanvas.height,
        0,
        0,
        normalizedCanvas.width,
        normalizedCanvas.height,
    );

    return normalizedCanvas;
}
