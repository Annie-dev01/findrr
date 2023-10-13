import { Response } from 'express';

class ResponseUtils {
    //when data is created . Or for Post request
    public createdSuccessResponse(res: Response, message: string, data: any = null) {
        if (data == null) {
            return res.status(201).json({ status: 'success', message });
        }
        return res.status(200).json({ status: 'success', data });
    }

    // for other successful requests
    public successResponse(res: Response, message: string, data: any = null) {
        if (data == null) {
            return res.status(201).json({ status: 'success', message });
        }
        return res.status(200).json({ status: 'success', data });
    }

    // for server errors
    public errorResponse(res: Response, message: string, data: any = null) {
        if (data == null) {
            return res.status(500).json({ status: 'failure', message });
        }
        return res.status(500).json({ message, status: 'failure', data });
    }

    // when request isn't authorized

    public unauthorizedResponse(res: Response, message: string, data: any = null) {
        if (data == null) {
            return res.status(403).json({ status: 'failure', message });
        }
        return res.status(403).json({ message, status: 'failure', data });
    }

    // for bad requests
    public badRequestResponse(res: Response, message: string, data: any = null) {
        if (data == null) {
            return res.status(400).json({ status: 'failure', message });
        }
        return res.status(403).json({ message, status: 'failure', data });
    }
}

export default new ResponseUtils();
