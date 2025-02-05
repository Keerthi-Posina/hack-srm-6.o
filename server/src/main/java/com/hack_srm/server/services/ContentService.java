package com.hack_srm.server.services;

import com.hack_srm.server.dto.ContentDTO;
import com.hack_srm.server.models.Content;

import java.util.List;

public interface ContentService {

    List<Content> getAllContents();
    Content getContentById(Long id);
    Content createContent(ContentDTO content);
    Content updateContent(Long id, ContentDTO updatedContent);
    void deleteContent(Long id);

}
