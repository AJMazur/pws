package pws.common.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import pws.common.model.PortalText;

public interface PortalTextRepository extends MongoRepository<PortalText, String> {

    @Query("{key:'?0'}")
    PortalText findPortalTextByKey(String key);

    long count();
}
