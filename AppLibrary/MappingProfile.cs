using classifieds;
using CoreModel;
using DataModel;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Services
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {

            CreateMap<ClassifiedsView, ClassifiedData>()
              .ForMember(destination => destination.userdata,
              map => map.MapFrom(source => JsonConvert.SerializeObject(source.userdata)))
              .ForMember(destination => destination.details,
              map => map.MapFrom(source => JsonConvert.SerializeObject(source.details)))
              .ForMember(destination => destination.timeinfo,
              map => map.MapFrom(source => JsonConvert.SerializeObject(source.timeinfo)));

            CreateMap<ClassifiedData, ClassifiedsView>()
              .ForMember(destination => destination.timeinfo,
              map => map.MapFrom(source => JsonConvert.DeserializeObject<Time>(source.timeinfo)))
              .ForMember(destination => destination.details,
              map => map.MapFrom(source => JsonConvert.DeserializeObject<ClassifiedDetails>(source.details)))
              .ForMember(destination => destination.userdata,
              map => map.MapFrom(source => JsonConvert.DeserializeObject<User>(source.userdata)));

            CreateMap<OfferIntermediate, OfferData>()
            .ForMember(destination => destination.userData,
            map => map.MapFrom(source => JsonConvert.SerializeObject(source.userData)))
            .ForMember(destination => destination.adData,
            map => map.MapFrom(source => JsonConvert.SerializeObject(source.adData)));

            CreateMap<OfferData, OfferIntermediate>()
              .ForMember(destination => destination.userData,
              map => map.MapFrom(source => JsonConvert.DeserializeObject<User>(source.userData)))
              .ForMember(destination => destination.adData,
              map => map.MapFrom(source => JsonConvert.DeserializeObject<ClassifiedData>(source.adData)));

            CreateMap<OffersView, OfferIntermediate>().ReverseMap();



        }
    }
}
