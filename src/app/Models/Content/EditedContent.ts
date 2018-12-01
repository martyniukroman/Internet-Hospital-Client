export class EditedContent {
    id: number;
    title: string;
    typeIds: number[];
    shortDescription: string;
    article: string;
    articlePreviewAttachments: File[];
    articleAttachments: File[];
    deletedAttachmentPaths: string[];
}
